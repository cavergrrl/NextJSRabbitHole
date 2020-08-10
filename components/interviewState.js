import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {useLandingDataContext} from '../store/providers/LandingDataProvider';

const InterviewState = () => {
    const { addCharacterId } = useLandingDataContext();

    const [characterIdValue, setCharacterIdValue] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        addCharacterId(characterIdValue);

        router.push('/en/landing');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Character ID:
                    <input
                        type="text"
                        value={characterIdValue}
                        onChange={e => setCharacterIdValue(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )    
}

export default InterviewState;
