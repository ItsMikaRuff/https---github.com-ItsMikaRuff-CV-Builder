//EditCvPage.jsx

import React, { useContext, useState } from "react";
import { CvContext } from "../context/CvContext";
import { Button, FormContainer, Title, PageWrapper } from "../components/StyledComponents";
import ExpertForm from "../components/ExpertForm";
import { useNavigate } from "react-router";

const EditCvPage = () => {
    const { editCv, setEditCv, saveCv, addEducation } = useContext(CvContext);

    const navigate = useNavigate();

    const [edu, setEdu] = useState({
        degree: "",
        field: "",
        institution: "",
        year: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditCv((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEdu((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        if (!edu.degree) return;
        addEducation(edu);
        setEdu({ degree: "", field: "", institution: "", year: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveCv(editCv);
        alert("CV Saved Successfully!");
        navigate("/preview-cv"); 
    };

    return (
        <PageWrapper>
            <Title>{editCv.id ? "Edit Your CV" : "Create Your CV"}</Title>
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input name="name" value={editCv.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" value={editCv.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone</label>
                    <input name="phone" value={editCv.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>Education</label>
                    <input name="degree" value={edu.degree} onChange={handleEducationChange} placeholder="Degree (e.g. BSc)" />
                    <input name="field" value={edu.field} onChange={handleEducationChange} placeholder="Field" />
                    <input name="institution" value={edu.institution} onChange={handleEducationChange} placeholder="Institution" />
                    <input name="year" value={edu.year} onChange={handleEducationChange} placeholder="Year" />
                    <Button type="button" onClick={handleAddEducation}>
                        + Add Education
                    </Button>
                    <ul>
                        {(editCv.education || []).map((e, i) => (
                            <li key={i}>
                                {e.degree} in {e.field} at {e.institution} ({e.year})
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label>Skills</label>
                    <input name="skills" value={editCv.skills} onChange={handleChange} />
                </div>
                <div>
                    <label>Languages</label>
                    <input name="languages" value={editCv.languages} onChange={handleChange} />
                </div>
                <h2>Experience</h2>
                <ExpertForm />
                <Button type="submit">{editCv.id ? "Update CV" : "Save CV"}</Button>
            </FormContainer>
        </PageWrapper>
    );
};

export default EditCvPage;
