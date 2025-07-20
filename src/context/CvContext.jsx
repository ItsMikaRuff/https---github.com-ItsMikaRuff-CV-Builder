//CvContext.jsx

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

    // שמירת CV 
    const saveCv = (cv) => {
        setEditCv(cv);
    };


    return (
        <CvContext.Provider
            value={{
                editCv,
                setEditCv,
                saveCv,
                addExperience,
                addEducation,
            }}
        >
            {children}
        </CvContext.Provider>
    );
};
