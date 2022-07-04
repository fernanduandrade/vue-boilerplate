import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Input from '../index.vue'

describe('Input component', () => {
  const wrapper = mount(Input, { props: { placeholder: 'Whats your name?' } })
  it('should render the component', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('should have prop placeholder', () => {
    expect(wrapper.props('placeholder')).toBe('Whats your name?')
  })
})