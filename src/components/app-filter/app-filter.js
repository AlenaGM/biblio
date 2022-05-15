import "./app-filter.css";

const AppFilter = (props) => {

        const buttonsData = [
                {title: 'all', label: 'All Books'},
                {title: 'want', label: 'Want to read'},
                {title: 'reading', label: 'Still reading'},
                {title: 'finished', label: 'Finished'}
        ]

        const buttons = buttonsData.map(({title, label}) => {
                const active = props.filter === title;
                const clazz = active ? 'btn-light' : 'btn-outline-light';

                return (
                        <button type="button"
                                className={`btn ${clazz}`}
                                key={title}
                                onClick={() => props.onFilterSelect(title)}>
                                {label}
                        </button>
                )
        })

        return (
                <div className="btn-group">
                        {buttons}
                </div>
        )
}

export default AppFilter;