// src/pages/Home.jsx
import React, { useContext, useMemo } from "react";
import { CvContext } from "../context/CvContext";
import { useNavigate } from "react-router-dom";
import { Button, CvCard, HomeContainer, Title } from "../components/StyledComponents";

const Home = () => {
    const { cvList, selectCv, editExistingCv } = useContext(CvContext);
    const navigate = useNavigate();

    // תצוגה של כל קורות החיים שנשמרו
    const cvCards = useMemo(
        () =>
            cvList.map((cv) => (
                <CvCard key={cv.id}>
                    <h2>{cv.name}</h2>
                    <p><strong>Email:</strong> {cv.email}</p>
                    <p><strong>Phone:</strong> {cv.phone}</p>
                    <Button
                        onClick={() => {
                            selectCv(cv.id);
                            navigate("/preview-cv");
                        }}
                        style={{ marginRight: 8 }}
                    >
                        צפייה
                    </Button>
                    <Button
                        onClick={() => {
                            editExistingCv(cv);
                            navigate("/edit-cv-page");
                        }}
                        variant="secondary"
                    >
                        עריכה
                    </Button>
                </CvCard>
            )),
        [cvList, selectCv, editExistingCv, navigate]
    );

    return (
        <HomeContainer>
            <Title>Welcome to the CV Builder</Title>
            <p>This is a simple CV Builder application.</p>
            <p>You can create your CV and view it.</p>
            <p>Click on the "Create CV Page" button to start creating your CV.</p>

            <Button onClick={() => navigate("/edit-cv-page")} style={{ margin: "16px 0" }}>
                Create CV Page
            </Button>

            <div style={{ width: "100%", marginTop: 32 }}>
                {cvList.length === 0 ? (
                    <p>No CVs created yet.</p>
                ) : (
                    <>
                        <h2>Your CV Cards</h2>
                        {cvCards}
                    </>
                )}
            </div>
        </HomeContainer>
    );
};

export default Home;
