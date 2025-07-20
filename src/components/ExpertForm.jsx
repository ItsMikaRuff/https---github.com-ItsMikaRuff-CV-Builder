//ExpertForm.jsx

import { useState, useContext } from "react";
import { CvContext } from "../context/CvContext";

const ExpertForm = () => {
    const { editCv, addExperience } = useContext(CvContext);

    const [experience, setExperience] = useState({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        current: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setExperience((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "current" && checked ? { endDate: "" } : {}),
        }));
    };

    const handleAddExperience = () => {
        if (!experience.jobTitle || !experience.company) {
            alert("Job Title and Company are required.");
            return;
        }
        addExperience(experience);
        setExperience({
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
            current: false,
        });
    };

    const experiences = editCv?.experience || [];

    return (
        <div>
            <div>
                <label>Job Title</label>
                <input name="jobTitle" type="text" value={experience.jobTitle} onChange={handleChange} />
            </div>
            <div>
                <label>Company</label>
                <input name="company" type="text" value={experience.company} onChange={handleChange} />
            </div>
            <div>
                <label>Start Date</label>
                <input name="startDate" type="date" value={experience.startDate} onChange={handleChange} />
            </div>

            {!experience.current && (
                <div>
                    <label>End Date</label>
                    <input name="endDate" type="date" value={experience.endDate} onChange={handleChange} />
                </div>
            )}

            <label>
                Still Working Here?
                <input
                    name="current"
                    type="checkbox"
                    checked={experience.current}
                    onChange={handleChange}
                    style={{ accentColor: "#0077cc", width: "18px", height: "18px" }}
                />
            </label>

            <div>
                <label>Description</label>
                <textarea name="description" value={experience.description} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleAddExperience}>
                + Add Experience
            </button>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index}>
                        <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.startDate} - {exp.current ? "Present" : exp.endDate})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpertForm;
