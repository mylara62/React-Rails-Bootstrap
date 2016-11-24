var Skill = React.createClass({

  getInitialState() {
    return { editable: false }
  },
  handleEdit() {
    if (this.state.editable) {
      let skill = { id: this.props.skill.id, 
                    name: this.refs.name.value, 
                    details: this.refs.details.value }
      this.props.handleEdit(skill);
    }
    this.setState({ editable: !this.state.editable})
  },

  handleDelete(id) {
    this.props.handleDelete(id);
  },
  handleDelete(id) {
    $.ajax({
      url: 'api/v1/skills/'+id,
      type: 'DELETE',
      success: () => {
        this.removeIdeaFromDOM(id);
      }
    });
  },
  removeIdeaFromDOM(id) {
    var object_id = id
    var skill_id = '' + object_id
    $("#"+skill_id).remove();
  },
  render() {
    var name = this.state.editable ? <input type='text'
                                            ref='name'
                                            className='form-control'
                                            defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    let details = this.state.editable ? <textarea type='text'
                                                  ref='details'
                                                  className='form-control'
                                                  defaultValue={this.props.skill.details}>
                                        </textarea>
                                      : <p>{this.props.skill.details}</p>
    return(
      <div className='col-md-9'>
        <div id={this.props.skill.id}>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{details}</td>
                <td>{this.props.skill.level}</td>
                <td>
                  <button className='btn btn-info' onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'} </button>
                  <button onClick={this.handleDelete.bind(this, this.props.skill.id)} className='btn-left btn btn-danger'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
});