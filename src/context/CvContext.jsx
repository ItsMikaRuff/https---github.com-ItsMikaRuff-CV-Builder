import { createContext, useState } from "react";

export const CvContext = createContext();

const emptyCv = {
    name: "",
    email: "",
    phone: "",
    education: [],
    skills: "",
    languages: "",
    experience: [],
};

export const CvProvider = ({ children }) => {
    const [editCv, setEditCv] = useState(emptyCv);

    // הוספת ניסיון
    const addExperience = (exp) => {
        setEditCv((prev) => ({
            ...prev,
            experience: [...(prev.experience || []), exp],
        }));
    };

    // הוספת לימודים
    const addEducation = (edu) => {
        setEditCv((prev) => ({
            ...prev,
            education: [...(prev.education || []), edu],
        }));
    };

    // שמירת CV (רק מעדכן, לא מאפס)
    const saveCv = (cv) => {
        setEditCv(cv);
    };

    // איפוס CV
    const resetEditCv = () => setEditCv(emptyCv);

    return (
        <CvContext.Provider
            value={{
                editCv,
                setEditCv,
                saveCv,
                addExperience,
                addEducation,
                resetEditCv,
            }}
        >
            {children}
        </CvContext.Provider>
    );
};
