import React from 'react';

const Leaderboard = () => {
    return (
        <div className="leaderboard-grid-container">
            <div className="leaderboard-item1">
                <table className="leaderboard-table">
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Score
                        </th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>Jack</td>
                        <td>4000</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;