import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/FelipeSabino-del.png" alt="Profile Picture"/>
            <div>
                <strong>Felipe S.</strong>
                
                <p><img src="icons/level.svg" alt="Level Up Image"/>Level {level}</p>
            </div>
        </div>
    );
}