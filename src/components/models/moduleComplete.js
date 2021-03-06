import React, { PropTypes } from 'react'

const ModuleComplete = function(props) {
    const { name, module, description, address } = props

    return <div className="panel panel-default">
        <div className="panel-heading">{name} | Модуль "{module}" {description}</div>
        <div className="panel-body">
            Готово. Адрес: {address}
        </div>
    </div>
}

ModuleComplete.propTypes = {
    name: PropTypes.string.isRequired,
    module: PropTypes.string.isRequired,
    description: PropTypes.string,
    address: PropTypes.string.isRequired
}
ModuleComplete.defaultProps = {
    description: ''
}

export default ModuleComplete
