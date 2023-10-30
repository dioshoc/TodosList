import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { taskSliceAction, taskSliceAsyncAction } from '@store/taskSlice';

type SliceType = 'taskSlice';

export const useActions = (sliceType: SliceType) => {
  const dispatch = useDispatch();
  const actions = {
    taskSlice: taskSliceAction,
  }[sliceType];

  return bindActionCreators(actions, dispatch);
};

export const useAsyncActions = (sliceType: SliceType) => {
  const dispatch = useDispatch();
  const actions = {
    taskSlice: taskSliceAsyncAction,
  }[sliceType];

  return bindActionCreators(actions, dispatch);
};
