import { useId, useState } from "react";

function WindowGUI({ children, header, h }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const contentId = useId();

  return (
    <article className={`window-editor${isMinimized ? " is-minimized" : ""}`}>
      <div className="window-header">
        {h == 3 ? <h3>{header}</h3> : <h2>{header}</h2>}
        <button
          className="window-toggle"
          type="button"
          aria-label={isMinimized ? `Restore ${header}` : `Minimize ${header}`}
          aria-expanded={!isMinimized}
          aria-controls={contentId}
          onClick={() => setIsMinimized((minimized) => !minimized)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="icon"
            aria-hidden="true"
            focusable="false"
          >
            {isMinimized ? (
              <path d="M6 12h12" />
            ) : (
              <>
                <path d="M6 6 18 18" />
                <path d="M18 6 6 18" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div className="editor-content" id={contentId} hidden={isMinimized}>
        {children}
      </div>
    </article>
  );
}

export default WindowGUI;
