import React from 'react'

const FilterOrder = () => {
  return (
    <>
      
      <div className="container-fluid py-3 filterorderpage" style={{backgroundColor:"#F7FBFE"}}>
      <form>
          <div className="row">
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Sku & Id"
                />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group">
              <input
        type="text"
        className='w-100 form-control'
        placeholder='Order date minimum'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group">
              

       <input
        type="text"
        className='w-100 form-control'
        placeholder='Order date maximum'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />


              </div>
            </div>
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Order Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col p-2">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Id"
                />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group">
              <input
        type="text"
        className='w-100 form-control'
        placeholder='Dispatch date minimum'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
              </div>
            </div>
            <div className="col p-2">
              <div class="form-group">
              <input
        type="text"
        className='w-100 form-control'
        placeholder='Dispatch date maximum'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
              </div>
            </div>
            <div className="col p-2">
            <div className="row filteerbtn">
                <div className="col">
                  <button type="submit" class="btn text-capitalize shadow-none  border" style={{ width: "100%" }}>
                    Clear
                  </button>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    class="btn text-capitalize gap-2 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#164C96",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    <i class="ri-filter-3-line"></i>
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default FilterOrder
