import React, {
  cloneElement,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { PopupContext } from "../../contexts/PopupContext";
import Icon from "../../ui/Icon";
import { ContextType, ModalWindowType, OpenType } from "../../types/modalTypes";

const defaultValue: ContextType = {
  open: function (): void {},
  openName: "",
  close: function (): void {},
};

const ModalContext = createContext(defaultValue);

/**
 *
 * @param children the modal window element to open
 * @returns the modal window element passed in as children
 */
function Modal({ children }: PropsWithChildren) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 *
 * @param children the element that opens the modal window
 * @param openWindowName the name of the modal window to open
 * @param callback the callback function, if provided, to call
 * @returns cloneElement with the children passed in
 */
function Open({
  children,
  opens: openWindowName,
}: { children: React.ReactElement } & OpenType) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

/**
 *
 * @param children the element to be open by the window
 * @param name name of the modal window to open
 * @returns the specified modal window
 */
function Window({
  children,
  name,
  headerText,
  showButton,
  buttonText,
  fullHeight,
  buttonType,
  iconUrl,
  isFullWidth,
  noScroll,
}: { children: React.ReactElement } & ModalWindowType) {
  const { openName, close } = useContext(ModalContext);
  const { close: closePopup } = useContext(PopupContext);

  if (name !== openName) return;

  function handleCloseModal() {
    close?.();
    closePopup?.();
  }

  function handleInnerModal(e: React.MouseEvent) {
    e.stopPropagation();
    closePopup?.();
  }

  return createPortal(
    <div>
      <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,_0,_0,_0.6)] transition-[background-color] duration-150 delay-0 z-[1050]"></div>
      <div
        data-focus-guard="true"
        tabIndex={name === openName ? 0 : -1}
        className="fixed top-px left-px w-px h-0 overflow-hidden p-0"
        {...(name === openName
          ? { "aria-hidden": "true", "data-focus-on-hidden": "true" }
          : {})}
      ></div>
      <div data-focus-lock-disabled="false">
        <div
          className="max-h-475-padding flex justify-center items-start w-screen h-screen fixed top-0 left-0  overflow-auto overscroll-y-none z-[1050] md:py-20-min-h-475 md:py-8-min-h-475 md-py-8-min-h-576 md-py-20-min-h-768 px-4 py-4 p-0 "
          onClick={handleCloseModal}
        >
          <section
            className={`flex flex-col max-h-full w-full max-w-[360px] rounded-lg bg-white shadow-[0_2px_40px_0_rgba(0,0,0,0.1)] ${
              fullHeight ? "h-screen" : noScroll ? "" : "overflow-y-auto"
            } ${isFullWidth ? "py-4" : "p-4"}`}
            onClick={handleInnerModal}
          >
            <header
              className={`flex justify-between py-4 ${
                isFullWidth ? "px-4" : ""
              }`}
            >
              <div
                className={`${
                  name === "transaction_details" ? "ml-0" : "ml-6"
                } w-[calc(100%_-_48px)]`}
              >
                <h4
                  className={`${
                    name === "transaction_details" ? "text-left" : "text-center"
                  } text-lg font-bold leading-6 text-primary-500`}
                >
                  {headerText}
                </h4>
              </div>
              <div className="flex justify-end min-w-6">
                <button
                  className="inline-flex justify-center items-center size-6 min-w-6 border-none rounded-lg text-primary-500 bg-transparent hover:bg-secondary-200"
                  onClick={close}
                >
                  <Icon imgUrl="src/assets/images/close.svg" />
                </button>
              </div>
            </header>

            {cloneElement(children, { onCloseModal: close })}

            {showButton && (
              <div className="flex items-center pt-4 pb-4 px-4">
                <button
                  className={`inline-flex justify-center items-center w-full h-12 p-0 px-4 rounded-full border border-solid text-sm font-medium leading-6 md:text-[1rem] relative align-middle select-none cursor-pointer transition-colors hover:shadow-[0_2px_8px_0_rgba(100,108,255,0.4)] ${
                    buttonType === "primary"
                      ? "border-brand-500 bg-brand-500 text-white hover:bg-brand-400"
                      : "text-brand-500 bg-transparent border-brand-500 hover:text-white hover:bg-brand-500"
                  }`}
                >
                  <Icon imgUrl={iconUrl || ""} margin="me-1" />
                  {buttonText}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
      <div
        data-focus-guard="true"
        tabIndex={name === openName ? 0 : -1}
        className="fixed top-px left-px w-px h-0 overflow-hidden p-0"
        {...(name === openName
          ? { "aria-hidden": "true", "data-focus-on-hidden": "true" }
          : {})}
      ></div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
