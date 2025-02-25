import React from 'react';

function WorkHistoryPage({ isNewStyle }) {
    return (
        <div className={isNewStyle ? "new-work-history-container" : "work-history-container"}>
            <div className={isNewStyle ? "new-work-history-content" : "work-history-content"}>
                <div className={isNewStyle ? "new-work-history-header" : "work-history-header"}>
                    <h3>Junior Software Engineer | SoBet | Fall 2023 - Winter 2025</h3>
                </div>
                <div className={isNewStyle ? "new-work-history-skills" : "work-history-skills"}>
                    <span>Xcode</span> • <span>Git/Github</span> • <span>Postman</span> • 
                    <span>Android Studio</span> • <span>AWS</span>
                </div>
                <ul className={isNewStyle ? "new-work-history-achievements" : "work-history-achievements"}>
                    <li>Developed and maintained React Native mobile application features using TypeScript, enhancing user experience and reducing bug occurrences.</li>
                    <li>Built and managed backend services using Laravel and PHP, improving API performance and ensuring data integrity.</li>
                    <li>Collaborated closely with a small team in a startup environment, participating in Agile development processes and contributing to rapid product iteration.</li>
                    <li>Implemented RESTful APIs and integrated third-party services to support application functionality.</li>
                    <li>Engaged in debugging, testing, and performance optimization across mobile, web, and backend systems.</li>
                    <li>Researched and integrated Zustand for state management, improving application state handling.</li>
                    <li>Established and enforced a strict guide on data stored in the local database, ensuring consistency and reliability.</li>
                </ul>
            </div>
        </div>
    );
}

export default WorkHistoryPage; 