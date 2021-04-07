import { mount } from '@vue/test-utils'

import App from './App.vue'

describe('App', () => {
  test('uses mounts', async () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Vue app')
    expect(wrapper.html()).toContain('Count: 0')
  })

  test('increments', async () => {
    const wrapper = mount(App)
    await wrapper.find('.button--increment').trigger('click')
    expect(wrapper.html()).toContain('Count: 1')
  });

  test('decrements', async () => {
    const wrapper = mount(App)
    await wrapper.find('.button--decrement').trigger('click')
    expect(wrapper.html()).toContain('Count: -1')
  });
});

