import React from 'react'
import { shallow } from 'enzyme';
import chai from 'chai';
import { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon'

import Home from '../client/components/Home';
import ProfessorDashboard from '../client/components/ProfessorDashboard';
import Queue from '../client/components/Queue';
import RouteNotFound from '../client/components/RouteNotFound';
import StudentLogin from '../client/components/StudentLogin';
import App from '../client/App';

chai.use(chaiEnzyme());
const spy = sinon.spy();
let wrapper;

describe('React unit tests', () => {
  describe('<App />', () => {
    it('Should exist', () => {
      let wrapper = shallow(<App />)
      expect(wrapper).to.exist;
    });
  });
  
  describe('<Home />', () => {
    before(() => wrapper = shallow(<Home />));

    it('Should render <div> with id "home"', () => {
      expect(wrapper).to.have.tagName('div');
      expect(wrapper).to.have.id('home');
    });

    it('Should render two buttons', () => {
      expect(wrapper).to.have.exactly(2).descendants('button');
    });

    it('Should have a button with text "Student Login"', () => {
      expect(wrapper.find('#student-login')).to.have.text('Student Login');
    });

    it('Should have a button with text "Professor Login"', () => {
      expect(wrapper.find('#professor-login')).to.have.text('Professor Login');
    });
  });

  describe('<ProfessorDashboard />', () => {
    before(() => wrapper = shallow(<ProfessorDashboard />));

    it('Should render <div> with id "professor-dashboard"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper).to.have.id('professor-dashboard');
    });

    it('Should render a form', () => {
      expect(wrapper).to.have.exactly(1).descendants('form');
    });

    it('Should render two input fields', () => {
      expect(wrapper).to.have.exactly(2).descendants('input');
    });

    it('Should have input with placeholder "Location"', () => {
      expect(wrapper.find('#location')).to.have.attr('placeholder').equal('Location');
    });

    it('Should have input with placeholder "Time"', () => {
      expect(wrapper.find('#time')).to.have.attr('placeholder').equal('Time');
    });

    it('Should have a submit button with type "submit"', () => {
      expect(wrapper.find('#submit')).to.have.attr('type').equal('submit');
    });

    it('Should have a delete button with text "End Office Hours"', () => {
      expect(wrapper.find('#delete')).to.have.text('End Office Hours');
    });
  });

  describe('<Queue />', () => {
    before(() => wrapper = shallow(<Queue />));

    it('Should have state "queueListState" with value deeply equivalent to empty array', () => {
      expect(wrapper).to.have.state('queueListState').deep.equal([]);
    });

    it('Should render <div> with id "queue"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper).to.have.id('queue');
    });

    it('Should render two buttons', () => {
      expect(wrapper).to.have.exactly(2).descendants('button');
    });
  });

  describe('<RouteNotFound />', () => {
    before(() => wrapper = shallow(<RouteNotFound />));

   it('Should render <h1>', () => {
      expect(wrapper.type()).to.equal('h1');
    });
  });

  describe('<StudentLogin />', () => {
    before(() => wrapper = shallow(<StudentLogin />));

    it('Should render <form> with id "student-form"', () => {
      expect(wrapper.type()).to.equal('form');
      expect(wrapper).to.have.id('student-form');
    });

    it('Should render two input fields', () => {
      expect(wrapper).to.have.exactly(2).descendants('input');
    });

    it('Should have input with id "student-email" and placeholder "Student Email"', () => {
      expect(wrapper.find('#student-email')).to.have.attr('placeholder').equal('Student Email');
    });

    it('Should have input with id "student-password" and placeholder "Password"', () => {
      expect(wrapper.find('#student-password')).to.have.attr('placeholder').equal('Password');
    });

    it('Should have button with type "submit"', () => {
      expect(wrapper.find('button')).to.have.attr('type').equal('submit');
    });
  });
});