import React, {Component} from 'react';
import './DragDrop.css';

export default class AppDragDropDemo extends Component {
    state = {
        fields: [
            {name: "1 Column", bgcolor: "yellow",id:'1col'},
            {name: "2 Column", bgcolor: "yellow",id:'2col'},
            {name: "4 Column", bgcolor: "yellow",id:'3col'},
            {name: "TextField", bgcolor: "yellow",id:'textField'},
        ]
    };

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("id", id);
    };

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev) => {
        let id = ev.dataTransfer.getData("id");
    };

    drawFields() {
        const fields = [];
        this.state.fields.forEach((field) => {
            fields.push(<div key={field.name}
                             onDragStart={(e) => this.onDragStart(e, field.id)}
                             draggable
                             className="draggable"
                             style={{backgroundColor: field.bgcolor}}
            >
                {field.name}
            </div>)
        });
        return fields;
    }

    render() {
        return (
            <section className="container">
                <div className="one">
                    {this.drawFields()}
                </div>
                <div droppable className="two droppable "
                     onDragOver={(e) => this.onDragOver(e)}
                     onDrop={(e) => this.onDrop(e)}></div>
            </section>
        );
    }
}