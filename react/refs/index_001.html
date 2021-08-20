<!--
    - Ссилки refs, найчастіше використовуються для взаємодії з елементами UI
-->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>React.PropTypes</title>
</head>
<body>
    <div id="react-container"></div>
    <script src="https://unpkg.com/react@15.4.2/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.4.2/dist/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.29/browser.js"></script>

    <script type="text/babel">
        class AddColorForm extends React.Component {
            constructor(props) {
                super(props);
                this.submit = this.submit.bind(this);
            }
            submit(e) {
                const {_title, _color} = this.refs;
                e.preventDefault();
                alert(`New Color: ${_title.value} ${_color.value}`);
                //if (this.props.onNewColor) {   // Якщо аргумент не обов'язковий - завжди робити таку перевірку
                    this.props.onNewColor(_title.value, _color.value);
                //}
                _title.value = '';
                _color.value = '#000000';
                _title.focus();
            }
            render() {
                return (
                    <form onSubmit={this.submit}>
                        <input ref="_title" type="text" placeholder="color title..." required />
                        <input ref="_color" type="color" required />
                        <button>ADD</button>
                    </form>
                )
            }
        }
        // А щє кращє заюзать PropTypes для перевірки аргументів
        AddColorForm.propTypes = {
            onNewColor: React.PropTypes.func
        }
        AddColorForm.defaultProps = {
            onNewColor: f=>f
        }

        // Завдяки ф-ції logColor роль компоненту AddColorForm зводиться до того, щоб тільки зібрати дані і передати їх кудись далі
        const logColor = (title, color) => console.log(`New color: ${title} | ${color}`);

        ReactDOM.render(<AddColorForm onNewColor={logColor} />,
            document.getElementById('react-container')
        );
    </script>

</body>
</html>
