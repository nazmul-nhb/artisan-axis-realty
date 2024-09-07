import { toast } from "react-toastify";

const getStoredItems = (itemKey) => {
    const storedItemsString = localStorage.getItem(itemKey);
    if (storedItemsString) {
        return JSON.parse(storedItemsString);
    }
    return [];
}

const saveToLocal = (itemID, itemKey) => {
    const storedItems = getStoredItems(itemKey);
    
    const filteredItems = storedItems.find(id => id === itemID);
    if (!filteredItems) {
        storedItems.push(itemID);
        localStorage.setItem(itemKey, JSON.stringify(storedItems));
        toast.success(`Added to Favorites`, { autoClose: 3000 });
    } else {
        toast.warn(`Already Exists in Favorites`, { autoClose: 3000 })
    }
}

const removeFromLocal = (itemID, itemKey) => {
    const storedItems = getStoredItems(itemKey);
    const filteredItems = storedItems.filter(id => id !== itemID);

    if (filteredItems.length < storedItems.length) {
        localStorage.setItem(itemKey, JSON.stringify(filteredItems));
        toast.info(`Removed form Favorites`, { theme: "colored", autoClose: 3000 });
    }
}

export { getStoredItems, saveToLocal, removeFromLocal }