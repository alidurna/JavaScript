import { useField } from "formik";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default function Input({ label, type = "text", ...props }) {
  //-------------------------------------------
  const [field, meta, helpers] = useField(props);
  const [show, setShow] = useState(false);
  const [inputType, setType] = useState(type);

  //-------------------------------------------

  useEffect(() => {
    if (show) {
      setType("text");
    } else if (type === "password") {
      setType("password");
    }
  }, [show]);

  return (
    <label className="block relative flex bg-zinc-50 border rounded-sm focus-within::border-gray-400">
      <input
        type={inputType}
        className={classNames({
          "outline-none text-xs w-full h-[38px]  px-2": true,
          "pt-[10px]": field.value,
        })}
        {...field}
        {...props}
      />
      <small
        className={classNames({
          "absolute left-[9px] cursor-text pointer-events-none  text-gray-500 transition-all -translate-y-1/2": true,
          "text-xs top-1/2": !field.value,
          "text-[10px] top-2.5": field.value,
        })}
      >
        {label}
      </small>

      {type === "password" && field.value && (
        <div
          onClick={() => setShow((show) => !show)}
          className="h-full flex items-center text-sm cursor-pointer select-none font-semibold pr-2"
        >
          {show ? "Hide" : "Show"}
        </div>
      )}
    </label>
  );
}
