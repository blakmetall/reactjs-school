import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Avatar, ScrollContent } from '../../../../../../../components';
// import { Textarea, Avatar, Input, FileInput, Button } from '../../../../../../../components';
import FilesList from '../files-list';

const ParticipantHeaderTaskVisualizer = () => {
    return (
        <Form>
            <Row className="mb-4">
                {/* left side layout */}
                <Col className="col-12">
                    <Row className="justify-content-between align-items-center mx-0 mb-3">
                        <h1 className="app-font-16 text-gray-500 font-weight-600 mb-3">Lorem Title Task</h1>
                        <h1 className="app-font-16 text-gray-500 mb-3">Viernes, 10/05/2020, 10:44 am</h1>
                    </Row>
                    <Col className="col-12 p-0">
                        <h1 className="mb-3 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sit placeat est atque nam
                            adipisci repellat ducimus, cumque saepe recusandae in amet sint fugit accusamus dicta doloribus, quam
                            tempore ipsa.Officiis repellendus eligendi cum reprehenderit, aperiam totam voluptatem minima iure
                            nisi quaerat, natus quod iste adipisci rerum molestiae sunt quasi qui magni, doloremque enim nam
                            dignissimos! Commodi similique ducimus quis?
                        </h1>
                    </Col>
                </Col>
            </Row>

            <Row>
                {/* Files uploaded list - todo component */}
                <Col className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h2 className="mb-2 app-font-14 text-gray-500">Archivos</h2>

                    <ScrollContent maxHeight="150px" className="p-3 rounded-15">
                        <FilesList className="mb-3" taskName="Tarea 1." />
                        <FilesList className="mb-3" taskName="Tarea 3." />
                        <FilesList className="mb-3" taskName="Tarea 4." />
                        <FilesList className="mb-3" taskName="Tarea 5." />
                        <FilesList className="mb-3" taskName="Tarea 6." />
                        <FilesList className="mb-3" taskName="Tarea 7." />
                        <FilesList
                            className="mb-3"
                            taskName="Tarea 2 Lorem test Large text. Lorem test Large text. Lorem test Large text. Lorem test Large text."
                        />
                        <FilesList taskName="Tarea 8 Lorem test Large text." />
                    </ScrollContent>
                </Col>
                <Col className="col-12 col-lg-6">
                    <h2 className="mb-2 app-font-14 text-gray-500">Equipo</h2>

                    <ScrollContent maxHeight="150px" className="p-3 rounded-15">
                        <div className="d-flex flex-column">
                            <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                            <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                            <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                            <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                            <Avatar size="x-small" name="lorem name" label="lorem name" className="mb-2" />
                        </div>
                    </ScrollContent>
                </Col>
            </Row>
        </Form>
    );
};

export default ParticipantHeaderTaskVisualizer;
