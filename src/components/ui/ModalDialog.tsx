import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react';
interface IProps{
    title?: string;
    isOpen: boolean;
    close: () => void;
    children: ReactNode;
}
const ModalDialog = ({ title,isOpen,close,children}: IProps) => {

    return (
        <>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-4 shadow-2xl"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                {title}
                            </DialogTitle>
                            <div className="mt-4">
                                {children}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
};
export default ModalDialog;