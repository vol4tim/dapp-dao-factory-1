import React, { PropTypes, Component } from 'react'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import style from './style.css'

export default class ModuleForm extends Component {
    render() {
        const {
            fields,
            handleSubmit,
            error,
            submitting,
            name,
            module,
            description,
            params,
            disableds
        } = this.props

        return <div className="panel panel-default">
            <div className="panel-heading">{name} | Модуль "{module}" {description}</div>
            <div className="panel-body">
                <form className="form-horizontal" onSubmit={handleSubmit}>
                    {Object.keys(fields).map((name, index) => {
                        const disabled = (_.findIndex(disableds, (item)=>item==name) >= 0) ? true : false
                        const field = fields[name]
                        return (
                            <div key={index} className="form-group">
                                <label className="col-sm-5 control-label">{params[index]}</label>
                                <div className="col-sm-7">
                                    <input type="text" className="form-control" placeholder={params[index]} disabled={disabled} {...field} />
                                </div>
                                {field.touched && field.error ? field.error : ''}
                            </div>
                        )
                    })}
                    <div className="form-group">
                        <div className="text-center">
                            {submitting ?
                                <div className={style.wave +' '+ style['fade-in']}>
                                    <div className={style.rect1}></div>
                                    <div className={style.rect2}></div>
                                    <div className={style.rect3}></div>
                                    <div className={style.rect4}></div>
                                    <div className={style.rect5}></div>
                                </div>
                            :
                                <input
                                    type='submit'
                                    className="btn btn-default"
                                    disabled={submitting}
                                    value={submitting ? '...' : 'Подтвердить'}
                                    />
                            }
                        </div>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
    }
}

ModuleForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    module: PropTypes.string.isRequired,
    description: PropTypes.string,
    params: PropTypes.array.isRequired,
    disableds: PropTypes.array
}
ModuleForm.defaultProps = {
    description: '',
    disableds: []
}

function mapStateToProps(state, props) {
    return {
        initialValues: props.data
    }
}
export default reduxForm({
    form: 'ModuleForm'
}, mapStateToProps)(ModuleForm)
