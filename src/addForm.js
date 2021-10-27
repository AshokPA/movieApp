import {Form, Button} from "react-bootstrap";
import {useState} from "react";

const AddForm = () => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        year: "2020",
        actor: '',
        rating: "",
        languages: [
            {
                lang: "Malayalam",
                checked: false
            },
            {
                lang: "English",
                checked: false
            },
            {
                lang: "Tamil",
                checked: false
            },
            {
                lang: "Hindi",
                checked: false
            }
            ],
        description: "",
        certificate: false,
    })

    const handleFormDataChange = (value, type) => {
        const edit = {...formData}
        edit[type] = value;
        setFormData(edit)
    }
    const handleFormCheckBoxHandle = (value, language) => {
        const edit = {...formData}
        edit.languages.map(lang => {
            if(lang.lang === language) {
                lang.checked = value;
            }
        });

        setFormData(edit);
    }

    const handleRadio = (value) => {
        const edit = {...formData};
        edit.certificate = value === 'a';
        setFormData(edit);
    }

    const handleFormSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        console.log("formData", formData)
    }

    return (
        <div className="container">
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Enter Movie Name"
                                  value={formData.name}
                                  onChange={(event) => handleFormDataChange(event.target.value, "name")}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year</Form.Label>
                    <Form.Select aria-label="Year" value={formData.year}
                                 onChange={(event) => handleFormDataChange(event.target.value, "year")}>

                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Actor</Form.Label>
                    <Form.Control type="text" placeholder="Actor Name"
                                  value={formData.actor}
                                  onChange={(event) => handleFormDataChange(event.target.value, "actor")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" placeholder="Rating"
                    value={formData.rating}
                                  onChange={(event) => handleFormDataChange(event.target.value, "rating")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLanguages">
                    <Form.Label>Languages</Form.Label>
                    {formData.languages.map(lang => {
                        return (
                            <Form.Check type="checkbox" label={lang.lang} key={lang.lang}
                                        checked={lang.checked}
                                        value={lang.checked}
                                        onChange={(event) => handleFormCheckBoxHandle(event.target.checked, lang.lang )}
                            />
                        )
                    })}

                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Text as="textarea" aria-label="With textarea"
                               cols={80}
                               value={formData.description}
                               onChange={(event) => handleFormDataChange(event.target.value, "description")}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Certificate</Form.Label>
                    <Form.Check
                        inline
                        label="A Certificate"
                        type="radio"
                        name="certificate"
                        id="Acertificate"
                        checked={formData.certificate}
                        value={formData.certificate}
                        onChange={(event) => handleRadio("a")}
                    />
                    <Form.Check
                        inline
                        label="B Certificate"
                        type="radio"
                        name="certificate"
                        id="Abcertificate"
                        checked={!formData.certificate}
                        value={!formData.certificate}
                        onChange={(event) => handleRadio("b")}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default AddForm;