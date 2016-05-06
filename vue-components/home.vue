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
                  <li>if
                    <ol>
                      <li>user selects a</li>
                      <li>and user selects b</li>
                      <li>or does not select 'Not Awesome'</li>
                      <li>and does not enter a value less than 20</li>
                    </ol>
                  </li>
                  <li>and
                    <ol>
                      <li>does not select c</li>
                      <li>or selects d</li>
                      <li>or selects 'Awesome'</li>
                    </ol>
                  </li>
                  <li>and
                    <ol>
                      <li>user selects 'Awesome'</li>
                      <li>or user selects 'Almost Awesome'</li>
                    </ol>
                  </li>
                  <li>and number is not 10</li>
                  <li>and number is not 15</li>
                  <li>or
                    <ol>
                      <li>user enters a number between 5 and 30</li>
                      <li>and number is not 12</li>
                      <li>and number is not 29</li>
                    </ol>
                  </li>
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
            </ol>
          </div>
        </form>
      </div>
      <div class="col-lg-6">
        <div class="form-group">
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.a" v-on:change="publish({event: $event, fn: 'checkboxChange::a'})"> a
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.b" v-on:change="publish({event: $event, fn: 'checkboxChange::b'})"> b
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.c" v-on:change="publish({event: $event, fn: 'checkboxChange::c'})"> c
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" v-model="homeVm.d" v-on:change="publish({event: $event, fn: 'checkboxChange::d'})"> d
          </label>
        </div>
        <div class="form-group">
          <select 
            class="form-control" 
            v-model="homeVm.dropdownSelection"
            id="awesome-status-select"
            v-on:change="publish({event: $event, fn: 'awesomeStatusSelectChange'})"
          >
            <option 
              v-for="option in homeVm.dropdownOptions" 
              v-bind:value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label class="control-label">Value between 5 and 30</label>
          <div>
            <input 
              type="number" 
              min="5" 
              max="30" 
              class="form-control" 
              v-model="homeVm.numberInput" 
              placeholder="value"
              v-on:change="publish({event: $event, fn: 'numberInputChange'})"
              v-on:keyup="publish({event: $event, fn: 'numberInputKeyup'})"
            >
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
              <button 
                class="btn btn-primary circle"
                disabled
                v-bind:disabled="homeVm.submitButton2.isDisabled"
              >
                <span class="button-content">Submit</span>
              </button>
            </div>
            <div class="col-sm-4">
              <label>Application 3</label>
              <button 
                class="btn btn-primary circle" 
                disabled
                v-bind:disabled="homeVm.submitButton3.isDisabled"
              >
                <span class="button-content">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>