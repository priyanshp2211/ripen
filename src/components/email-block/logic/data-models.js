import { content } from "../fallback";
import dispatchRecipe from "./api";

const RECIPES = {
    LEADS_BLOCK: "e44582a4-9072-4b7d-846e"
};

const initContentModel = (set) => ({
    content,
    currentButtonText: content.button?.states?.initial,
    setButtonText: (buttonText) =>
        set((state) => ({ ...state, currentButtonText: buttonText })),
    getContent: async () => {
        const payload = {
            key: "content"
        };
        const content = await dispatchRecipe({
            triggerId: RECIPES.LEADS_BLOCK,
            payload
        });
        set((state) => ({ ...state, content }));
    },
    setContent: (content) => {
        set((state) => ({ ...state, content }));
    }
});

const initLoadingModel = (set) => ({
    loading: true,
    processing: false,
    setLoading: () => {
        set((state) => ({ ...state, loading: true }));
    },
    clearLoading: () => {
        set((state) => ({ ...state, loading: false }));
    },
    setProcessing: () => {
        set((state) => ({ ...state, processing: true }));
    },
    clearProcessing: () => {
        set((state) => ({ ...state, processing: false }));
    }
});

export { initContentModel, initLoadingModel };
