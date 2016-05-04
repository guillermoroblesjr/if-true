<main>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col-lg-12">
        <a id="header-link" href="https://github.com/guillermoroblesjr/if-true"><h1 id="header">if-true.js</h1></a>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <form id="user-form">
          <div>
            <h2>Business Requirements</h2>
            <ol>
              <li><h5>Enable 'Submit 1' button</h5>
                <ol>
                  <li>if user selects a</li>
                  <li>and user selects b</li>
                  <li>and does not select c</li>
                  <li>and user selects 'Awesome'</li>
                  <li>and time is an odd minute, i.e. 10:01 am</li>
                  <li>or user enters a number between 5 and 30</li>
                  <li>and number is not 10</li>
                  <li>and number is not 15</li>
                </ol>
              </li>
              <li><h5>Enable 'Submit 2' button</h5>
                <ol>
                  <li>if user does not select a</li>
                  <li>and user enters 10</li>
                </ol>
              </li>
              <li><h5>Enable 'Submit 3' button</h5>
                <ol>
                  <li>if user does not select b</li>
                  <li>and user enters between 12 and 18</li>
                  <li>and number is not 15</li>
                </ol>
              </li>
              <li><h5>Enable 'Enter value' input</h5>
                <ol>
                  <li>if user selects b</li>
                  <li>and user selects any of:
                    <ol>
                      <li>Awesome</li>
                      <li>Almost Awesome</li>
                    </ol>
                  </li>

                </ol>
              </li>
            </ol>
          </div>
        </form>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.a" v-on:change="publish({event: $event, fn: 'checkboxChange'})"> a
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.b" v-on:change="publish({event: $event, fn: 'checkboxChange'})"> b
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.c" v-on:change="publish({event: $event, fn: 'checkboxChange'})"> c
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.d" v-on:change="publish({event: $event, fn: 'checkboxChange'})"> d
          </label>
        </div>
        <div class="form-group">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <div class="">
            <h4>11:44 AM</h4>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="control-label">Value between 5 and 30</label>
          <div class="">
            <input disabled type="number" class="form-control" id="number-input" placeholder="value">
          </div>
        </div>
        <div class="form-group">
          <div class="text-center">
            <div class="col-sm-4">
              <label>Application 1</label>
              <button 
                class="btn btn-primary circle"
                disabled
                v-bind:disabled="homeVm.submitButton1.isDisabled"
              >
                <span class="button-content">Submit</span>
              </button>
            </div>
            <div class="col-sm-4">
              <label>Application 2</label>
              <button class="btn btn-primary circle" disabled>
                <span class="button-content">Submit</span>
              </button>
            </div>
            <div class="col-sm-4">
              <label>Application 3</label>
              <button class="btn btn-primary circle" disabled>
                <span class="button-content">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>