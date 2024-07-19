import { ReactEcsRenderer } from '@dcl/sdk/react-ecs';
import * as ui from 'dcl-ui-toolkit';
import { openExternalUrl } from "~system/RestrictedActions";

export function showPrompt1() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'This is the prompt for the first green plane',
    onAccept: () => {
      console.log('More info pressed for prompt 1');
      openExternalUrl({ url: 'https://www.behance.com' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  });

  prompt.show();
}

export function showPrompt2() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'This is the prompt for the second green plane',
    onAccept: () => {
      console.log('More info pressed for prompt 2');
      openExternalUrl({ url: 'https://www.behance.com' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  });

  prompt.show();
}

export function showPrompt3() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'This is the prompt for the third green plane',
    onAccept: () => {
      console.log('More info pressed for prompt 3');
      openExternalUrl({ url: 'https://www.behance.com' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  });

  prompt.show();
}

ReactEcsRenderer.setUiRenderer(ui.render);
