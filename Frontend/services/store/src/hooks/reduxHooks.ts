import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// для корректной работы диспатча
export const useAppDispatch = () => useDispatch<AppDispatch>();
// будет знать о структуре приложения
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
