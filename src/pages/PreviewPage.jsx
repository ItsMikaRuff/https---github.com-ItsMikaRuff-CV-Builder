import React, { useRef, useContext } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CvContext } from "../context/CvContext";
import { useTheme } from "styled-components";
import {
    PdfWrapper,
    CvSection,
    SectionTitle,
    Name,
    Detail,
    Sub,
    List,
    PdfButton,
} from "../components/StyledComponents";
import styled from "styled-components";

// עטיפת עמוד רגילה
const PageWrapper = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px; // מעט רווח למטה כדי שלא ייחתך
`;

const PreviewPage = () => {
    const { editCv } = useContext(CvContext);
    const cvRef = useRef();
    const theme = useTheme();
    const pdfButtonRef = useRef();

    const handleDownloadPDF = async () => {
        if (!cvRef.current) return;

        // הסתרה רגעית של הכפתור רק בצילום
        if (pdfButtonRef.current) pdfButtonRef.current.style.display = "none";

        // צילום - גודל canvas לפי PdfWrapper בפועל
        const canvas = await html2canvas(cvRef.current, {
            scale: 2,
            backgroundColor: theme.background,
            useCORS: true,
            removeContainer: true,
            windowWidth: cvRef.current.scrollWidth,
            windowHeight: cvRef.current.scrollHeight,
        });

        if (pdfButtonRef.current) pdfButtonRef.current.style.display = "";

        // יחס המידות האמיתי של הדף המצולם
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const ratio = canvas.width / canvas.height;
        let pdfWidth = pageWidth;
        let pdfHeight = pageWidth / ratio;
        if (pdfHeight > pageHeight) {
            pdfHeight = pageHeight;
            pdfWidth = pageHeight * ratio;
        }
        const x = (pageWidth - pdfWidth) / 2;
        const y = (pageHeight - pdfHeight) / 2;

        pdf.addImage(imgData, "PNG", x, y, pdfWidth, pdfHeight, '', 'FAST');
        pdf.save("cv.pdf");
    };

    if (!editCv || !editCv.name) {
        return (
            <PageWrapper>
                <div className="container">
                    <h1>CV Preview</h1>
                    <p>No CV data to preview.</p>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <PdfWrapper ref={cvRef}>
                <Name>{editCv.name}</Name>
                <Detail>
                    {editCv.email}
                    {editCv.email && editCv.phone && " | "}
                    {editCv.phone}
                </Detail>
                <CvSection>
                    <SectionTitle>Education</SectionTitle>
                    <List>
                        {(editCv.education || []).length > 0 ? (
                            editCv.education.map((edu, index) => (
                                <li key={index}>
                                    <strong>{edu.degree}</strong>
                                    {edu.field && <> | {edu.field}</>}
                                    {edu.institution && <> | {edu.institution}</>}
                                    {edu.year && <> ({edu.year})</>}
                                </li>
                            ))
                        ) : <Sub>No education details</Sub>}
                    </List>
                </CvSection>
                <CvSection>
                    <SectionTitle>Experience</SectionTitle>
                    <List>
                        {(editCv.experience || []).length > 0 ? (
                            editCv.experience.map((exp, index) => (
                                <li key={index}>
                                    <strong>{exp.jobTitle}</strong>
                                    {exp.company && <> at {exp.company}</>}
                                    {exp.startDate && <> | {exp.startDate} - {exp.endDate || "Present"}</>}
                                    {exp.description && (
                                        <div >
                                            {exp.description}
                                        </div>
                                    )}
                                </li>
                            ))
                        ) : <Sub>No experience details</Sub>}
                    </List>
                </CvSection>
                <CvSection>
                    <SectionTitle>Skills</SectionTitle>
                    <Sub>{editCv.skills || "No skills listed"}</Sub>
                </CvSection>
                <CvSection>
                    <SectionTitle>Languages</SectionTitle>
                    <Sub>{editCv.languages || "No languages listed"}</Sub>
                </CvSection>
                {/* כפתור PDF לא נכנס לקובץ */}
                <PdfButton ref={pdfButtonRef} onClick={handleDownloadPDF}>
                    Download PDF
                </PdfButton>
            </PdfWrapper>
        </PageWrapper>
    );
};

export default PreviewPage;
