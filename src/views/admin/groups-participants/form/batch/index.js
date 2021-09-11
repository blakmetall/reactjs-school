/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ImportRecordsInput, RenderContentWhen } from '../../../../../components';
import { addGroupsParticipantsBatch } from '../../../../../store/actions/groups-participants';
import { showBatchResultsNotification, showFailedNotification } from '../../../../../store/actions/notifications';
import importSchema from './importSchema';
import importSample from './importSample';

const GroupsParticipantsBatchUploader = () => {
    const [isRequesting, setIsRequesting] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [isRequestCompleted, setIsRequestCompleted] = useState(false);

    const dispatch = useDispatch();

    const handleOnSubmitBatch = csv => {
        if (csv && csv.data && csv.data.length) {
            setIsRequesting(true);
            setIsRequestSuccess(false);
            setIsRequestCompleted(false);

            // dispatch(addGroupsParticipantsBatch(csv.data))
            //     .then(batchResults => {
            //         setIsRequestSuccess(true);
            //         dispatch(showBatchResultsNotification(batchResults));
            //     })
            //     .catch(() => {
            //         setIsRequestSuccess(false);
            //         dispatch(showFailedNotification());
            //     })
            //     .finally(() => {
            //         setIsRequesting(false);
            //         setIsRequestCompleted(true);
            //     });
        }
    };

    return (
        <ImportRecordsInput
            label="Archivo"
            placeholder="Carga masiva de datos"
            schema={importSchema}
            onComplete={data => handleOnSubmitBatch(data)}
            sampleFile={importSample}
            samplefileName="participantes-ejemplo-importable"
            batchLoader={
                <RenderContentWhen isTrue={isRequestSuccess} showSpinnerIf={isRequesting} stopSpinnerIf={isRequestCompleted} />
            }
        />
    );
};

GroupsParticipantsBatchUploader.propTypes = {};

GroupsParticipantsBatchUploader.defaultProps = {};

export default GroupsParticipantsBatchUploader;
