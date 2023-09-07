import { useState } from "react";

import "./index.css";

export default function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const Color = ({ color }) => {
    const handleOnClick = () => {
      setSelectedColor(selectedColor);
      selectedColor === color;

      return (
        <div className={color}>
          <div className="selected-nav" onClick={handleOnClick}>
            <button
              onClick={() =>
                setSelectedColor((color) => selectedColor === color)
              }
            >
              color is {tomato}
            </button>
          </div>
          <div id="container">
            Currently selected:
            <div id="navbar" className={selectedColor}>
              {selectedColor}

              <div className="colors-list">
                <h2 className="color-header">Your Colors</h2>

                <Color
                  color="tomato"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />
                <button className="selected-tomato" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="orange"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />
                <button className="selected-orange" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="goldenrod"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />
                <button className="selected-goldenrod" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="green"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />
                <button className="selected-green" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="blue"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />
                <button className="selected-blue" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="violet"
                  setSelectedColor={setSelectedColor(violet)}
                  selectedColor={violet}
                />

                <button className="selected-violet" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="black"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />

                <button className="selected-black" onClick={handleOnClick}>
                  {setSelectedColor(color)}
                </button>

                <Color
                  color="antiquewhite"
                  setSelectedColor={setSelectedColor(color)}
                  selectedColor={color}
                />

                <button
                  className="selected-antiquewhite"
                  onClick={handleOnClick}
                >
                  {setSelectedColor(color)}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
  };
}
