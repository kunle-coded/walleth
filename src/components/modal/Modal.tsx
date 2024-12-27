import React, {
  cloneElement,
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import Close from "../icons/Close";

interface WindowProps {
  name: string;
  headerText?: string;
}

interface ContextType {
  openName: string;
  open: Dispatch<React.SetStateAction<string>>;
  close: () => void;
}

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

interface OpenProps {
  opens: string;
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
}: { children: React.ReactElement } & OpenProps) {
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
}: PropsWithChildren<WindowProps>) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return;

  return createPortal(
    <div
      className="flex justify-center items-center inset-0 fixed bg-[rgba(0,_0,_0,_0.6)] transition-[background-color] duration-150 delay-0 z-[1050] "
      onClick={close}
    >
      <div
        data-focus-guard="true"
        tabIndex={name === openName ? 0 : -1}
        className="fixed top-px left-px w-px h-0 overflow-hidden p-0"
        {...(name === openName
          ? { "aria-hidden": "true", "data-focus-on-hidden": "true" }
          : {})}
      ></div>
      <div data-focus-lock-disabled="false">
        <div className="flex justify-center items-start w-screen h-screen fixed top-0 left-0 p-2 px-4 overflow-auto overscroll-y-none z-[1050] md:py-20 sm:py-12">
          <section
            className="flex flex-col max-h-full size-96 w-full max-w-96 p-0 rounded-lg overflow-y-auto bg-white shadow-[0_2px_40px_0_rgba(0,0,0,0.1)] transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-between p-4">
              <div className="ml-6 w-[calc(100%_-_48px)]">
                <h4 className="text-lg font-bold leading-6 text-center text-primary-500">
                  {headerText}
                </h4>
              </div>
              <div className="flex justify-end min-w-6">
                <button
                  className="inline-flex justify-center items-center size-6 min-w-6 border-none rounded-lg text-primary-500 bg-transparent hover:bg-secondary-200"
                  onClick={close}
                >
                  <span className="inline-block flex-[0_0_1em] w-4 h-4 max-w-4 text-inherit relative">
                    <Close />
                  </span>
                </button>
              </div>
            </header>
            <div className="flex w-full">{children}</div>
          </section>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
