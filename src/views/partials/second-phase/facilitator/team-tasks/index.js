import React from 'react';
import { PageContainer, PageHeading, Dropdown } from '../../../../../components';
import AddTeamTasksForm from './form-add-team-tasks';
import FacilitatorTeamTasksList from './list';

const FacilitatorTeamTasksPage = () => {
    return (
        <div className="flex-grow-1">
            <PageHeading label="Tareas en equipo" />
            <PageContainer contentPaddingClass="p-3 pb-4">
                <Dropdown title="Agregar tareas en equipo" icon="add" className="mb-4">
                    <AddTeamTasksForm />
                </Dropdown>
                <FacilitatorTeamTasksList />
            </PageContainer>
        </div>
    );
};

export default FacilitatorTeamTasksPage;
