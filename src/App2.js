import React, { Component } from 'react'

const confirm = Com => {
    class confirmComponent extends Com {
        render () {
            return (
                <div>
                    confirm
                    {super.render()}
                </div>
            )
        }
        showConfirm() {
            console.log('confirm');
        }
        hideConfirm() {
            console.log('hide')
        }
    }
    return confirmComponent
}

class User extends Component {
    render () {
        return (
            <div>
                {this.props.age}
            </div>
        )
    }
}
User = confirm(User)


class App extends Component {
    render () {
        return <User age={10}/>
    }
}

export default App