import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { SkipTo } from '../lib';
import { useEventSource } from '@vueuse/core';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/SkipTo',
  component: SkipTo,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SkipTo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SkipTo to="#target" /><div data-testid="empty-space" style="height: 10000px"></div><div data-testid="target" style="height: 50px; width: 50px; background-color: red"></div>',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);

  expect(
    canvas.getByText(
      'Skip to main content'
    )
  ).not.toBeVisible();

  userEvent.click(canvas.getByTestId('empty-space'))
  userEvent.tab();

  expect(
    canvas.getByText(
      'Skip to main content'
    )
  ).toBeVisible();
};
