import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from '../index.vue'

describe('Input component', () => {
  const wrapper = mount(Button, { props: { 
    label: 'Enter',
    primary: false,
    size: 'small',
    backgroundColor: '#333'
  } })
  it('should render the component', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('should have prop label', () => {
    expect(wrapper.props('label')).toBe('Enter')
  })

  it('should have prop primary to be false', () => {
    expect(wrapper.props('primary')).toBe(false)
  })

  it('should have prop class size to be small', () => {
    expect(wrapper.props('size')).toBe('small')
  })

  it('should have prop backgroundColor to have a hex value', () => {
    expect(wrapper.props('backgroundColor')).toBe('#333')
  })
})