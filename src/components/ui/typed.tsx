import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedJS() {
    const el = useRef(null)

    useEffect(() => {
        if (!el.current) {
            return;
        }

        const options = {
            strings: [
              '<span style="color:#05EEFF;">Cyber Security</span>',
              '<span style="color:#05EEFF;">Developing</span>',
              '<span style="color:#05EEFF;">Networking</span>',
              '<span style="color:#05EEFF;">DevOps</span>',
              '<span style="color:#05EEFF;">Daily Driver</span>',
            ],
            typeSpeed: 120,
            backSpeed: 120,
            loop: true,
        }
        const typed = new Typed(el.current, options);
        
        return () => {
            typed.destroy();
          };
    }, [])

    return (
        <span ref={el}></span>
    );
}
