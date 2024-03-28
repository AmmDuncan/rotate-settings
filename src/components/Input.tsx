import React from "react";

import cx from "clsx";
import { Text } from "@chakra-ui/react";

type Props = Readonly<{
  [other: string]: any;

  error?: string | boolean;
  className?: string;
  label?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"] | "textarea";
  name?: string;
  id?: string;
  options?: { value: string; label: string }[];

  prefix?: React.ReactNode;
  suffix?: React.ReactNode;

  innerClassName?: string;
  inputClassName?: string;
}> &
  React.ComponentPropsWithRef<"input"> &
  React.ComponentPropsWithRef<"select"> &
  React.ComponentPropsWithRef<"textarea">;

export const Input = React.forwardRef((props: Props, ref: React.Ref<any>) => {
  const {
    label,
    type = "text",
    error = "",
    className,
    inputClassName,
    innerClassName,
    options = [],
    prefix,
    suffix,
    id,
    ...otherProps
  } = props;

  delete otherProps.defaultValue;

  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const isTextarea = type === "textarea";
  const isPassword = type === "password";
  const isSelect = type === "select";

  const [show, setShow] = React.useState(false);

  const computedTestId = `input-${label}`;

  const computedType = React.useMemo(() => {
    switch (type) {
      case "password":
        return show ? "text" : "password";
      case "date":
        return "date";
      default:
        return type;
    }
  }, [type, show]);

  const computedInputClassName = cx(
    "w-full border-none min-w-[0px] text-xs !outline-0 !bg-[transparent] self-stretch outline-none disabled:text-base-400",
    "placeholder:text-base-400 disabled:cursor-not-allowed",
    inputClassName,
  );

  function focusOnInput() {
    const input = wrapperRef.current?.querySelector("input");
    if (!input) return;
    input.focus();
  }

  function handleWrapperClick(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
    focusOnInput();
  }

  function handleLabelClick(e: React.MouseEvent<HTMLLabelElement>) {
    e.stopPropagation();
    focusOnInput();
  }

  function handleToggleShow() {
    setShow((prev) => !prev);
    focusOnInput();
  }

  return (
    /* WRAPPER */
    <div ref={wrapperRef} className={cx("wrapper", className)} onClick={handleWrapperClick}>
      {/* LABEL */}
      {label ? (
        <label
          className="block text-[13px] leading-[18px] text-gray-600 mb-2"
          htmlFor={props?.id ?? props.name}
          onClick={handleLabelClick}
        >
          {label}
        </label>
      ) : null}

      {/* INNER */}
      <div
        className={cx(
          innerClassName,
          "flex items-center bg-bg p-2 px-6 rounded-lg",
          "border border-primary/10 focus-within:border-primary",
          { "ring-1 ring-error": !!error },
          { "h-[42px]": !isTextarea },
        )}
      >
        {prefix}

        {/* TEXT FIELD */}
        {!isTextarea && !isSelect ? (
          <input
            data-testid={computedTestId}
            type={computedType}
            ref={ref}
            className={computedInputClassName}
            id={id ?? otherProps.name}
            {...otherProps}
          />
        ) : null}

        {/* SELECT FIELD */}
        {isSelect ? (
          <select
            data-testid={computedTestId}
            ref={ref}
            className={computedInputClassName}
            id={id ?? otherProps.name}
            {...otherProps}
          >
            {options.map((optionItem) => (
              <option key={optionItem.value} value={optionItem.value}>
                {optionItem.label}
              </option>
            ))}
          </select>
        ) : null}

        {/* TEXTAREA */}
        {isTextarea ? (
          <textarea
            data-testid={computedTestId}
            className={computedInputClassName}
            ref={ref}
            id={id ?? otherProps.name}
            {...otherProps}
          ></textarea>
        ) : null}

        {suffix}
      </div>

      {/* MESSAGE */}
      {error ? <Text>{error}</Text> : null}
    </div>
  );
});

Input.displayName = "Input";
