import { Routes, Route } from 'react-router';
import Home from '../components/home/Home';
import MergeSort from '../components/merge-sort/MergeSort';

function RouteList() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merge-sort" element={<MergeSort />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default RouteList