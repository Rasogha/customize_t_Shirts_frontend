import { useEffect, useRef, useState } from 'react';
import * as  fabric  from 'fabric'; 
import { FaFont, FaImage, FaTrash, FaDownload, FaPalette, FaUndo, FaTshirt, FaSyncAlt } from 'react-icons/fa';

const DesignLabScreen = () => {
  // --- STATE ---
  const [activeSide, setActiveSide] = useState('front'); // 'front' or 'back'
  const [shirtColor, setShirtColor] = useState('#ffffff');
  const [selectedObject, setSelectedObject] = useState(null);
  
  // These refs will eventually hold the canvas data for each side
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  // --- INITIALIZATION (Visual Only for now) ---
  useEffect(() => {
    // Initialize Fabric Canvas
    const initCanvas = new fabric.Canvas(canvasRef.current, {
      height: 500,
      width: 400,
      backgroundColor: 'transparent',
      selection: true,
      preserveObjectStacking: true,
    });
    fabricRef.current = initCanvas;

    // Selection Events
    initCanvas.on('selection:created', (e) => setSelectedObject(e.selected[0]));
    initCanvas.on('selection:updated', (e) => setSelectedObject(e.selected[0]));
    initCanvas.on('selection:cleared', () => setSelectedObject(null));

    return () => {
      initCanvas.dispose();
    };
  }, []);

  // --- MOCK FUNCTIONS (We will make these real in the next step) ---
  const handleSideChange = (side) => {
    // 1. Save current canvas to history
    // 2. Clear canvas
    // 3. Load the 'side' canvas from history
    setActiveSide(side);
    
    // Visual feedback for now:
    if(fabricRef.current) {
        fabricRef.current.clear(); 
        // In real version, we wouldn't just clear, we would load the saved data!
    }
  };

  const addText = () => {
    if (!fabricRef.current) return;
    const text = new fabric.Textbox('YOUR TEXT', {
      left: 100, top: 200, fontFamily: 'Arial', fill: '#333', fontSize: 24, fontWeight: 'bold'
    });
    fabricRef.current.add(text);
    fabricRef.current.setActiveObject(text);
  };

  return (
    <div className="min-h-screen bg-brandBlack text-gray-100 flex flex-col md:flex-row font-sans">
      
      {/* === LEFT SIDEBAR: TOOLS === */}
      <div className="w-full md:w-80 bg-gray-900 border-r border-gray-800 p-6 flex flex-col gap-8 shadow-2xl z-20">
        
        {/* Header */}
        <div className="border-b border-gray-800 pb-4">
            <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <FaTshirt className="text-brandLightGreen"/> Design Lab
            </h2>
            <p className="text-xs text-gray-500 mt-1">Customize Front & Back</p>
        </div>

        {/* 1. Global Actions */}
        <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-brandGreen transition-all text-sm font-bold">
                <FaUndo size={12} /> Undo
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-brandGreen transition-all text-sm font-bold">
                <FaSyncAlt size={12} /> Reset
            </button>
        </div>

        {/* 2. Color Picker */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <FaPalette /> Product Color
          </label>
          <div className="flex flex-wrap gap-3">
            {['#ffffff', '#121212', '#1f2937', '#004d40', '#b91c1c', '#1d4ed8', '#f59e0b'].map((color) => (
              <button
                key={color}
                onClick={() => setShirtColor(color)}
                className={`w-8 h-8 rounded-full border border-gray-600 shadow-sm transition-transform hover:scale-110 focus:outline-none 
                ${shirtColor === color ? 'ring-2 ring-brandGreen ring-offset-2 ring-offset-gray-900' : ''}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* 3. Add Elements */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Design Tools</label>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={addText} className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-brandGreen hover:bg-gray-750 transition-all shadow-lg group">
              <FaFont className="text-2xl mb-2 text-gray-500 group-hover:text-brandLightGreen transition-colors" />
              <span className="text-xs font-medium text-gray-300">Add Text</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-brandGreen hover:bg-gray-750 transition-all shadow-lg group">
              <FaImage className="text-2xl mb-2 text-gray-500 group-hover:text-brandLightGreen transition-colors" />
              <span className="text-xs font-medium text-gray-300">Upload Image</span>
            </button>
          </div>
        </div>

        {/* 4. Layer Controls */}
        {selectedObject && (
            <div className="mt-auto p-4 bg-gray-800/50 rounded-xl border border-brandGreen/20 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brandLightGreen uppercase">Layer Selected</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 py-2 rounded-lg hover:bg-red-500/20 text-sm font-medium transition-colors">
                    <FaTrash size={12} /> Delete Layer
                </button>
            </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-800">
           <button className="w-full py-3 bg-gradient-to-r from-brandGreen to-brandLightGreen text-white font-bold rounded-xl shadow-lg hover:shadow-brandGreen/40 flex items-center justify-center gap-2 transform active:scale-95 transition-all">
                <FaDownload /> Save & Buy
            </button>
        </div>
      </div>

      {/* === CENTER: WORKSPACE === */}
      <div className="flex-1 bg-black relative flex flex-col items-center justify-center p-4 md:p-10 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* --- VIEW SWITCHER (FRONT / BACK) --- */}
        <div className="mb-6 z-10 bg-gray-900 p-1 rounded-full border border-gray-700 flex shadow-xl">
            <button 
                onClick={() => handleSideChange('front')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeSide === 'front' ? 'bg-brandGreen text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                Front View
            </button>
            <button 
                onClick={() => handleSideChange('back')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeSide === 'back' ? 'bg-brandGreen text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                Back View
            </button>
        </div>

        {/* --- THE SHIRT AREA --- */}
        <div className="relative shadow-2xl rounded-sm transition-transform duration-300 scale-[0.85] md:scale-100">
             <div className="border-8 border-gray-800 rounded-lg bg-white relative overflow-hidden h-[500px] w-[400px]">
                
                {/* 1. Shirt Color Layer */}
                <div 
                  className="absolute inset-0 transition-colors duration-500 z-0"
                  style={{ backgroundColor: shirtColor }}
                />

                {/* 2. Neckline Visuals (CSS Tricks to look like a shirt) */}
                {/* If Front: Low Scoop. If Back: High Curve. */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-white rounded-b-full z-1 shadow-inner border-b-4 border-gray-100 opacity-90 transition-all duration-300"
                     style={{ 
                         height: activeSide === 'front' ? '60px' : '30px', // Deep curve for front, shallow for back
                         borderRadius: '0 0 50% 50%' 
                     }}
                ></div>

                {/* 3. The Canvas */}
                <div className="absolute inset-0 z-10">
                    <canvas ref={canvasRef} />
                </div>

                {/* 4. Print Area Guide */}
                <div className="absolute z-20 pointer-events-none inset-0 flex items-center justify-center">
                    <div className="w-[300px] h-[350px] border-2 border-dashed border-brandGreen/30 relative">
                        <span className="absolute bottom-2 right-2 text-[10px] text-brandGreen/50 uppercase font-bold tracking-widest bg-white/20 px-1">
                            {activeSide} Print Area
                        </span>
                    </div>
                </div>

             </div>
        </div>
      </div>

    </div>
  );
};

export default DesignLabScreen;