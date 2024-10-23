import React, { useEffect, useRef, useState } from "react";
import * as PIXI from "pixi.js";
import { Spine } from "pixi-spine";

interface SpineBoxProps {
  spineDataUrl: string;
  initialAnimation?: string;
  scale?: number;
  backgroundColor?: number;
}

const SpineBox: React.FC<SpineBoxProps> = ({
  spineDataUrl,
  initialAnimation,
  scale = 2,
  backgroundColor = 0x1099bb00,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [spineInstance, setSpineInstance] = useState<Spine | null>(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight + 100,
      backgroundAlpha: 0,
    });

    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view as HTMLCanvasElement);
    }

    const loadSpineData = async () => {
      try {
        await PIXI.Assets.load(spineDataUrl);
        const spineData = PIXI.Assets.cache.get(spineDataUrl);
        const spineAnimation = new Spine(spineData.spineData);

        spineAnimation.x = app.screen.width / 2;
        spineAnimation.y = app.screen.height / 2;
        spineAnimation.scale.set(1);

        app.stage.addChild(spineAnimation);
        setSpineInstance(spineAnimation);

        if (initialAnimation) {
          spineAnimation.state.setAnimation(0, initialAnimation, true);
        }
      } catch (error) {
        console.error("Error loading Spine data:", error);
      }
    };

    loadSpineData();

    return () => {
      app.destroy(true, true);
    };
  }, [spineDataUrl]);

  return <div className="absolute" ref={canvasRef} />;
};

export default SpineBox;
