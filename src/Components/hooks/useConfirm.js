import { useState } from "react";

export const useConfirm = () => {
    const [openOrderConfirm, setOpenOrderConfirm] = useState(false);
    return {openOrderConfirm, setOpenOrderConfirm};
}
