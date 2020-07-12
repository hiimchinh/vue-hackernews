import Item from '../Item.vue'
import { mount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('sanity test', () => {
    console.log(Item)
  })
  test("renders 'item'", () => {
    const wrapper = mount(Item)
    expect(wrapper.vm.$el.textContent).toContain('item')
  })
})
