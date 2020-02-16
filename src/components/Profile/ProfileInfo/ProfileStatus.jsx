import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        statusEditMode: false,
        status: this.props.status
    }
    activateEditMode = () => { 
        this.setState({
            statusEditMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            statusEditMode: false
        });
        this.props.updateUserStatus(this.state.status)
        console.log(this.props.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                {!this.state.statusEditMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.statusEditMode &&
                    <div>
                        <input autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            onChange={this.onStatusChange}
                            value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;