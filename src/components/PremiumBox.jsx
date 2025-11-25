import React from "react";
import PropTypes from "prop-types";

/**
 * PremiumBox
 *
 * Props:
 * - width, height: string | number (pixels if number)
 * - borderRadius: string | number (e.g. "12px", "1.5rem", 12)
 * - bgColor, textColor: any valid CSS color (hex, rgb, tailwind var, etc.)
 * - text: string (optional) - if provided, rendered inside
 * - children: React nodes (preferred over text for more complex content)
 * - className: additional Tailwind or custom classes
 * - style: extra inline styles (merged)
 * - onClick: click handler
 */
export default function PremiumBox({
  width = "100%",
  height = "auto",
  borderRadius = "12px",
  bgColor = "#ffffff",
  textColor = "#111827",
  text = "",
  children = null,
  className = "",
  style = {},
  onClick,
  ...rest
}) {
  // helper to convert numeric props into px
  const toCssSize = (val) =>
    typeof val === "number" ? `${val}px` : val ?? undefined;

  const inlineStyle = {
    width: toCssSize(width),
    height: toCssSize(height),
    borderRadius: toCssSize(borderRadius),
    backgroundColor: bgColor,
    color: textColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  return (
    <div
      role={onClick ? "button" : "region"}
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      onKeyPress={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick(e);
      }}
      style={inlineStyle}
      className={`overflow-hidden ${className}`}
      {...rest}
    >
      {children ?? <span className="select-none font-bold">{text}</span>}
    </div>
  );
}

PremiumBox.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
