import React from "react"

function newHogForm ({hogFormData, setHogFormData, onAddHog}) {
  
  function handleSubmit(e) {
    e.preventDefault()
    onAddHog()
  } 

  function handleChange(e) {
    let key = e.target.name
    let value = ''
    if (key === 'greased') {
      value = Boolean(e.target.value);
    } else if (key === 'weight') {
      value = e.target.value === '' ? 0 : parseFloat(e.target.value);
    } else {
      value = e.target.value
    }
    setHogFormData({
      ...hogFormData, 
      [key]: value
    })
  }

  return (
    <div className="searchBar ui form">
      <section >
      <h1>New Hog Form</h1>
      <form 
        onSubmit={handleSubmit}>
        <div className="six fields">
          {/* NAME TEXT LABEL */}
          <div className="field">
            <label>Name</label>
            <input 
              name='name' 
              type='text'
              value={hogFormData.name}
              onChange={handleChange}
              placeholder='Name'
            ></input>
          </div>
          {/* SPECIALTY TEXT LABEL */}
          <div className="field">
            <label>Specialty</label>
            <input
              name= 'specialty'
              type='text'
              value={hogFormData.specialty}
              onChange={handleChange}
              placeholder="Specialty"
            ></input>
          </div>
          {/* WEIGHT TEXT LABEL */}
          <div className="field">
            <label>Weight</label>
            <input
              name="weight"
              type='number'
              value={hogFormData.weight}
              onChange={handleChange}
              placeholder="Weight"
            ></input>
          </div>
          {/* IMAGE TEXT FIELD */}
          <div className="field">
            <label>Image URL</label>
            <input
              name='image'
              type='text'
              value={hogFormData.image}
              onChange={handleChange}
              placeholder="Image URL"
            ></input>
          </div>
        </div>
        <div className="six fields">
          {/* GREASED SELECT FIELD */}
          <div className="field">
            <select
              name='greased'
              value={hogFormData.greased ? 'true' : ""}
              onChange={handleChange}
            >
              <option value="true">Greased</option>
              <option value="">Not Greased</option>
            </select>
          </div>
          {/* HEIGHEST MEDAL ACHIEVED SELECT FIELD */}
          <div className="field">
            <select
              name='highest medal achieved'
              value={hogFormData['highest medal achieved']}
              onChange={handleChange}
            >
              <option value='bronze'>Bronze</option>
              <option value='silver'>Silver</option>
              <option value='gold'>Gold</option>
              <option value='platinum'>Platinum</option>
            </select>
          </div>
        </div>
        <button type="submit">Add Hog</button>
      </form>
      </section>
    </div>
  )
}

export default newHogForm;