import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';

class ProfileStatus extends React.Component {
    // if (!props.profile) {
    //     return <Preloader />
    // }
    state = {
        statusEditMode: false
    }
    activateEditMode = () => {
        this.setState({
            statusEditMode:  true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            statusEditMode:  false
        })
    }
    render() {
        return (
            <>
                {!this.state.statusEditMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>ffd</span>
                    </div>
                }
                {this.state.statusEditMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;