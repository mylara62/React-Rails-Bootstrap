var NewSkill = React.createClass({

  handleClick() {
    let name = this.refs.name.value;
    let details = this.refs.details.value;

    $.ajax({
      url: '/api/v1/skills',
      type: 'POST',
      data: { skill: { name: name, details: details} },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
    this.refs.name.value = '';
    this.refs.details.value = '';
  },

  render() {
    return (
      <div className="col-md-4">
        <div className='form-group'>
          <label>Name</label> 
          <input ref='name' className='form-control' placeholder='Enter name of skill' />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <textarea ref='details' className='form-control' placeholder='Leave your comment for skill'></textarea>
        </div>
        <div className='form-group'>
          <button onClick={this.handleClick} className="btn btn-success">Submit</button>
        </div>
      </div>
    )
  }
});
