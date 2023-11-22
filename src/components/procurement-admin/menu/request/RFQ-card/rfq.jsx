import React from 'react'
import "./rfq.css"
 const Rfq = () => {
  return (
    <>
    <section class="form-card">
      <div class="first-row">
      <div className="label-card">
        <label for="date">Open Date</label>
        <input type="date" class="date input-class"/>
        </div>
        <div className="label-card">
        <label for="date">closing Date</label>
        <input type="date" class="date input-class"/>
        </div>
        <div className="label-card">
        <label for="date">Required Delivery  Date</label>
        <input type="date" class="date input-class"/>
        </div><div className="label-card">
        <label for="date">RFQ Type</label>
        <input type="date" class="date input-class"/>
        </div>
      </div>
      <div class="second-row">
      <div className="location-card">
        <label for="location">Location</label>
        <select name="location" id="location" class="input-class">
          <option value="">Select Location</option>
          <option value="">#</option>
          <option value="">#</option>
          <option value="">#</option>
          <option value="">#</option>
        </select>
        </div>
<div className="note-card">
        <label for="note">Note</label>
        <textarea name="" id="" className='text-area'></textarea>
        </div>
      </div>

    
    </section>




    </>
  )
}

export default Rfq;
